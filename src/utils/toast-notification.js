import { toast } from 'react-hot-toast';

export const onSuccess = () =>
	toast.success('Perform side effect after fetching successfully');
export const onError = () =>
	toast.error('Perform side effect after encountered error');
