import request from '~/utils/request';
import { API_REQUEST_DELETE_CUSTOMERS } from '~/config/routes';

export const useDeleteCustomer = () => {
    const onDelete = async ({id}: {id: number}) => {
        const { path } = API_REQUEST_DELETE_CUSTOMERS; 
        const customerDeleted = await request<{ id: number }>({
            ...API_REQUEST_DELETE_CUSTOMERS,
            url: path.replace(':id', id.toString()),
        });
        return customerDeleted;
    };
    return {
        onDelete,
    } 
}

export default useDeleteCustomer;