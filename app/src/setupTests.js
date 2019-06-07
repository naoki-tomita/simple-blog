jest.mock("firebase");
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { firestore } from "firebase";
import { when } from "jest-when";

// firestore mock.
class CollectionMock {
  onSnapshot() {}
}
class DBMock {
  collection = () => new CollectionMock();
}
when(firestore).calledWith().mockReturnValue(new DBMock());


Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
})
