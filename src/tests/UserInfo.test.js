import { render } from "@testing-library/react";
import UserInfo from "../components/ui/UserInfo";


describe(UserInfo, () => {

  test('should display the first name', () => {
    const { getByTestId } = render(<UserInfo selecteduser={{
      email: 'noe.dupuis@example.com',
      id: { name: 'AVS', value: '"756.1426.6983.61"' },
      picture: { thumbnail: 'https://randomuser.me/api/portraits/thumb/men/19.jpg' },
      name: { first: 'Noé', last: 'Dupuis' },
      login: { username: 'goldencat475' },
      location: { street: { number: 4216, name: 'Rue Abel-Ferry' }, city: 'Moudon', state: 'Appenzell Ausserrhoden', postcode: '6578' },
      phone: '076 449 27 69',
      cell: '078 254 53 62',
      nat: 'CH'
    }} />);

    const firstNameValue = getByTestId("first").textContent;
    expect(firstNameValue).toEqual('Noé');
  });

  test('should display the last name', () => {
    const { getByTestId } = render(<UserInfo selecteduser={{
      email: 'noe.dupuis@example.com',
      id: { name: 'AVS', value: '"756.1426.6983.61"' },
      picture: { thumbnail: 'https://randomuser.me/api/portraits/thumb/men/19.jpg' },
      name: { first: 'Noé', last: 'Dupuis' },
      login: { username: 'goldencat475' },
      location: { street: { number: 4216, name: 'Rue Abel-Ferry' }, city: 'Moudon', state: 'Appenzell Ausserrhoden', postcode: '6578' },
      phone: '076 449 27 69',
      cell: '078 254 53 62',
      nat: 'CH'
    }} />);

    const lastNameValue = getByTestId("last").textContent;
    expect(lastNameValue).toEqual('Dupuis');
  });

  test('should display the email', () => {
    const { getByTestId } = render(<UserInfo selecteduser={{
      email: 'noe.dupuis@example.com',
      id: { name: 'AVS', value: '"756.1426.6983.61"' },
      picture: { thumbnail: 'https://randomuser.me/api/portraits/thumb/men/19.jpg' },
      name: { first: 'Noé', last: 'Dupuis' },
      login: { username: 'goldencat475' },
      location: { street: { number: 4216, name: 'Rue Abel-Ferry' }, city: 'Moudon', state: 'Appenzell Ausserrhoden', postcode: '6578' },
      phone: '076 449 27 69',
      cell: '078 254 53 62',
      nat: 'CH'
    }} />);

    const emailValue = getByTestId("email").textContent;
    expect(emailValue).toEqual('noe.dupuis@example.com');
  });

  test('should display the username', () => {
    const { getByTestId } = render(<UserInfo selecteduser={{
      email: 'noe.dupuis@example.com',
      id: { name: 'AVS', value: '"756.1426.6983.61"' },
      picture: { thumbnail: 'https://randomuser.me/api/portraits/thumb/men/19.jpg' },
      name: { first: 'Noé', last: 'Dupuis' },
      login: { username: 'goldencat475' },
      location: { street: { number: 4216, name: 'Rue Abel-Ferry' }, city: 'Moudon', state: 'Appenzell Ausserrhoden', postcode: '6578' },
      phone: '076 449 27 69',
      cell: '078 254 53 62',
      nat: 'CH'
    }} />);

    const usernameValue = getByTestId("username").textContent;
    expect(usernameValue).toEqual('goldencat475');
  });

  test('should display the street name', () => {
    const { getByTestId } = render(<UserInfo selecteduser={{
      email: 'noe.dupuis@example.com',
      id: { name: 'AVS', value: '"756.1426.6983.61"' },
      picture: { thumbnail: 'https://randomuser.me/api/portraits/thumb/men/19.jpg' },
      name: { first: 'Noé', last: 'Dupuis' },
      login: { username: 'goldencat475' },
      location: { street: { number: 4216, name: 'Rue Abel-Ferry' }, city: 'Moudon', state: 'Appenzell Ausserrhoden', postcode: '6578' },
      phone: '076 449 27 69',
      cell: '078 254 53 62',
      nat: 'CH'
    }} />);

    const streetValue = getByTestId("streetName").textContent;
    expect(streetValue).toContain('Rue Abel-Ferry');
  });

  test('should display the city', () => {
    const { getByTestId } = render(<UserInfo selecteduser={{
      email: 'noe.dupuis@example.com',
      id: { name: 'AVS', value: '"756.1426.6983.61"' },
      picture: { thumbnail: 'https://randomuser.me/api/portraits/thumb/men/19.jpg' },
      name: { first: 'Noé', last: 'Dupuis' },
      login: { username: 'goldencat475' },
      location: { street: { number: 4216, name: 'Rue Abel-Ferry' }, city: 'Moudon', state: 'Appenzell Ausserrhoden', postcode: '6578' },
      phone: '076 449 27 69',
      cell: '078 254 53 62',
      nat: 'CH'
    }} />);

    const cityValue = getByTestId("city").textContent;
    expect(cityValue).toContain('Moudon');
  });

  test('should display the state', () => {
    const { getByTestId } = render(<UserInfo selecteduser={{
      email: 'noe.dupuis@example.com',
      id: { name: 'AVS', value: '"756.1426.6983.61"' },
      picture: { thumbnail: 'https://randomuser.me/api/portraits/thumb/men/19.jpg' },
      name: { first: 'Noé', last: 'Dupuis' },
      login: { username: 'goldencat475' },
      location: { street: { number: 4216, name: 'Rue Abel-Ferry' }, city: 'Moudon', state: 'Appenzell Ausserrhoden', postcode: '6578' },
      phone: '076 449 27 69',
      cell: '078 254 53 62',
      nat: 'CH'
    }} />);

    const stateValue = getByTestId("state").textContent;
    expect(stateValue).toContain('Appenzell Ausserrhoden');
  });

  test('should display the phone number', () => {
    const { getByTestId } = render(<UserInfo selecteduser={{
      email: 'noe.dupuis@example.com',
      id: { name: 'AVS', value: '"756.1426.6983.61"' },
      picture: { thumbnail: 'https://randomuser.me/api/portraits/thumb/men/19.jpg' },
      name: { first: 'Noé', last: 'Dupuis' },
      login: { username: 'goldencat475' },
      location: { street: { number: 4216, name: 'Rue Abel-Ferry' }, city: 'Moudon', state: 'Appenzell Ausserrhoden', postcode: '6578' },
      phone: '076 449 27 69',
      cell: '078 254 53 62',
      nat: 'CH'
    }} />);

    const phoneValue = getByTestId("phone").textContent;
    expect(phoneValue).toContain('076 449 27 69');
  });

  test('should display the nationality', () => {
    const { getByTestId } = render(<UserInfo selecteduser={{
      email: 'noe.dupuis@example.com',
      id: { name: 'AVS', value: '"756.1426.6983.61"' },
      picture: { thumbnail: 'https://randomuser.me/api/portraits/thumb/men/19.jpg' },
      name: { first: 'Noé', last: 'Dupuis' },
      login: { username: 'goldencat475' },
      location: { street: { number: 4216, name: 'Rue Abel-Ferry' }, city: 'Moudon', state: 'Appenzell Ausserrhoden', postcode: '6578' },
      phone: '076 449 27 69',
      cell: '078 254 53 62',
      nat: 'CH'
    }} />);

    const natValue = getByTestId("nat").textContent;
    expect(natValue).toContain('CH');
  });




});