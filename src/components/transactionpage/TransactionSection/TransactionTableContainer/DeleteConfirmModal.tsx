import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';

interface DeleteConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

const DeleteConfirmModal = ({
  open,
  onClose,
  onConfirm,
  loading,
}: DeleteConfirmModalProps) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Delete Transaction</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure you want to delete this transaction?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button disabled={loading} onClick={onClose}>
        Cancel
      </Button>
      <Button autoFocus color="error" disabled={loading} onClick={onConfirm}>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);

export default DeleteConfirmModal;
