import { render, fireEvent } from "@testing-library/react";
import User from "../../components/ui/User";
import users from './users.json';

describe(User, () => {

    test('displays users once they are loaded', () => {
        const { getAllByTestId } = render(<User users = {users}/>)

        const userCard = getAllByTestId("userCard");
        expect(userCard).toHaveLength(2);
      });

})