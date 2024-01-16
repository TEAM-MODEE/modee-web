import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { OfferInfoProps } from './type';

import api from '@/views/@common/hooks/api';

const usePutOfferModel = (offerId: number) => {
  const navigate = useNavigate();

  const [data, setData] = useState<OfferInfoProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  const postOffer = async () => {
    try {
      const response = await api.put(`/model/offer/${offerId}`, null);
      setData(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err);
        navigate('/error');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    postOffer,
    data,
    error,
    loading,
  };
};

export default usePutOfferModel;
