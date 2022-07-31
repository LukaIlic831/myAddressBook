import { render } from "@testing-library/react";
import Users from "../components/Users";

describe(Users, () => {

    test('displays a text Loading...', () => {
        const { getByTestId } = render(<Users
        users={[]}
        hasmore={true}
        />);

        const loadingValue = getByTestId("loading").textContent;
        expect(loadingValue).toEqual('Loading...');

      });

      test('displays a text End of users catalog', () => {
        const { getByTestId } = render(<Users
        users={[]}
        hasmore={false}
        />);

        const usersEndValue = getByTestId("usersEnd").textContent;
        expect(usersEndValue).toEqual('End of users catalog');

      });

    

})