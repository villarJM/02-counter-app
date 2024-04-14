import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Prueba en 08-imp-exp', () => {
  
  test('getHeroesById debe retornar un heroe por ID', () => {
    
    const id = 1;
    const hero = getHeroeById( id );

    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'});
  });

  test('getHeroesById debe retornar undefined si no existe', () => {
    
    const id = 100;
    const hero = getHeroeById( id );

    expect( hero ).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar un arreglo de heroes de DC', () => {
    
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);

    expect( hero.length ).toBe( 3 );
    expect( hero ).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
    
  });

  test('getHeroesByOwner debe retornar un arreglo de heroes de Marvel', () => {
    
    const owner = 'Marvel';
    const hero = getHeroesByOwner(owner);
    
    expect( hero.length ).toBe(2);
  });
});