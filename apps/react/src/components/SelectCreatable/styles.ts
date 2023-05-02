import { styled } from '../../styles';
import CreatableSelect from 'react-select/async-creatable';

import { customSelectStyles } from '../Select/styles';

export const CustomSelect = styled(CreatableSelect, {
  ...customSelectStyles,
});
