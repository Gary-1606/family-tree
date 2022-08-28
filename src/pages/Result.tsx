import Button from '@shared/components/Button';
import React, { FunctionComponent, useState } from 'react';
import ContextHeader from '../components/ContextHeader';
import { familyNodes as data } from '@shared/assets/data';
import { FamilyNode } from '@shared/interface/data.interface';

export const Result: FunctionComponent = () => {
  const [person, setPerson] = useState<string>('');
  const [relative, setRelative] = useState<string>('');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [relationship, setRelationship] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Filtering based on input names
    const validNames = [
      person.toLowerCase().trim(),
      relative.trim().toLowerCase().trim(),
    ];
    const persons = data.filter((datum) => {
      return validNames.includes(datum.name.toLowerCase().trim());
    });

    if (validNames[0] === validNames[1]) {
      setIsInputValid(false);
      setErrorMsg(
        'Both the names are same. Please enter different names from the family tree',
      );
      return;
    } else if (persons.length !== 2) {
      setIsInputValid(false);
      setErrorMsg('Please enter the names in the family tree');
      return;
    }
    setIsInputValid(true);
    getRelationship(persons);
    e.preventDefault();
  };

  const getRelationship = (persons: FamilyNode[]) => {
    const generationGap = Math.abs(
      persons[0].generation - persons[1].generation,
    );

    switch (generationGap) {
      case 0:
        getRelationship0(persons);
        return;
      case 1:
        getRelationship1(persons);
        return;
      default:
        getRelationship2(persons);
        return;
    }
  };

  const getRelationship0 = (persons: FamilyNode[]) => {
    const vPerson = persons.find(
      (p) => p.name.toLowerCase() === person.toLowerCase(),
    );
    const vRelative = persons.find(
      (p) => p.name.toLowerCase() === relative.toLowerCase(),
    );
    if (vPerson && vRelative) {
      if (vRelative.partnerId && vPerson.id === vRelative.partnerId) {
        setRelationship(vRelative.gender === 'male' ? 'Husband' : 'Wife');
        return;
      } else if (
        vPerson.motherId &&
        vRelative.motherId &&
        vPerson.motherId === vRelative.motherId
      ) {
        setRelationship(vRelative.gender === 'male' ? 'Brother' : 'Sister');
        return;
      } else {
        const personPartner = data.find(
          (datum) => datum.id === vPerson.partnerId,
        );
        const relativePartner = data.find(
          (datum) => datum.id === vRelative.partnerId,
        );
        if (
          (personPartner?.motherId &&
            vRelative.motherId &&
            personPartner?.motherId === vRelative.motherId) ||
          (relativePartner?.motherId &&
            vPerson.motherId &&
            relativePartner?.motherId === vPerson.motherId)
        ) {
          setRelationship(
            vRelative.gender === 'male' ? 'Brother-in-law' : 'Sister-in-law',
          );
          return;
        }
        setRelationship('Cousins');
      }
    }
  };

  const getRelationship1 = (persons: FamilyNode[]) => {
    const vPerson = persons.find(
      (p) => p.name.toLowerCase() === person.toLowerCase(),
    );
    const vRelative = persons.find(
      (p) => p.name.toLowerCase() === relative.toLowerCase(),
    );

    let elderPerson: FamilyNode, youngerPerson: FamilyNode;

    if (vPerson && vRelative) {
      if (vPerson.generation > vRelative.generation) {
        youngerPerson = vPerson;
        elderPerson = vRelative;
      } else {
        youngerPerson = vRelative;
        elderPerson = vPerson;
      }

      if (
        (youngerPerson.fatherId && youngerPerson.fatherId === elderPerson.id) ||
        (youngerPerson.motherId && youngerPerson.motherId === elderPerson.id)
      ) {
        setRelationship(
          vRelative.gender === 'male'
            ? vPerson.generation > vRelative.generation
              ? 'Father'
              : 'Son'
            : vPerson.generation > vRelative.generation
            ? 'Mother'
            : 'Daughter',
        );
        return;
      } else {
        const personMother = data.find(
          (datum) => datum.id === youngerPerson.motherId,
        );
        const personFather = data.find(
          (datum) => datum.id === youngerPerson.fatherId,
        );

        if (
          personFather?.motherId &&
          personFather?.motherId === elderPerson.motherId
        ) {
          if (vPerson.generation > vRelative.generation) {
            setRelationship(
              vRelative.gender === 'male' ? 'Paternal Uncle' : 'Paternal Aunt',
            );
            return;
          }
          setRelationship(
            vPerson.gender === 'male'
              ? `${vPerson.name} is paternal uncle to ${vRelative.name}`
              : `${vPerson.name} is paternal aunt to ${vRelative.name}`,
          );
          return;
        } else if (
          personMother?.motherId &&
          personMother?.motherId === vRelative.motherId
        ) {
          if (vPerson.generation > vRelative.generation) {
            setRelationship(
              vRelative.gender === 'male' ? 'Maternal Uncle' : 'Maternal Aunt',
            );
            return;
          }
          setRelationship(
            vPerson.gender === 'male'
              ? `${vPerson.name} is maternal uncle to ${vRelative.name}`
              : `${vPerson.name} is maternal aunt to ${vRelative.name}`,
          );
          return;
        }
        setRelationship(
          vPerson.generation > vRelative.generation
            ? vRelative.gender === 'male'
              ? `${vRelative.name} is uncle to ${vPerson.name}`
              : `${vRelative.name} is aunt to ${vPerson.name}`
            : vPerson.gender === 'male'
            ? `${vPerson.name} is uncle to ${vRelative.name}`
            : `${vPerson.name} is aunt to ${vRelative.name}`,
        );
      }
    }
  };

  const getRelationship2 = (persons: FamilyNode[]) => {
    const vPerson = persons.find(
      (p) => p.name.toLowerCase() === person.toLowerCase(),
    );
    const vRelative = persons.find(
      (p) => p.name.toLowerCase() === relative.toLowerCase(),
    );

    if (vRelative && vPerson) {
      if (vPerson.generation > vRelative.generation) {
        setRelationship(
          vRelative.gender === 'male' ? 'GrandFather' : 'GrandMother',
        );
        return;
      }
      setRelationship(
        vRelative.gender === 'male' ? 'Grandson' : 'Granddaughter',
      );
    }
  };

  return (
    <>
      <ContextHeader />
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="input-1">Person:</label>
        <input
          placeholder="Enter person name"
          name="person"
          type="text"
          id="input-1"
          data-testid="person-name"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <br />
        <label htmlFor="input-2">Relative:</label>
        <input
          placeholder="Enter relative name"
          name="relative"
          type="text"
          id="input-2"
          data-testid="relative-name"
          value={relative}
          onChange={(e) => setRelative(e.target.value)}
        />
        <br />
        {!isInputValid && <div>{errorMsg}</div>}
        {relationship && isInputValid && <div>{relationship}</div>}
        <Button buttonText="Find Result" onBtnClick={(e) => handleSubmit(e)} />
      </form>
    </>
  );
};

export default Result;
