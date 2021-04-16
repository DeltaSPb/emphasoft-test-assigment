import Delete from './Delete';
import Edit from './Edit';
import Create from './Create';

const modals = {
  deleting: Delete,
  editing: Edit,
  creating: Create,
};

export default (modalName) => modals[modalName];
