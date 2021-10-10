import Modal from 'react-modal'

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){//pega as props desestruturando
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}>
            <h2>Cadatrar Transacao</h2>
        </Modal>
    );
}