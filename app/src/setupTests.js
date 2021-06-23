jest.mock("firebase");
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
