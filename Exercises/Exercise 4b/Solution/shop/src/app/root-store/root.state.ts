import { IProductgroupState } from './productgroup-store/productgroup.store';

// TODO: 1
// Create an interface IState
// This interface represents the root store
// Add a field productgroup of type IProductgroup (will be created in TODO 2)
export interface IState {
    productgroup:  IProductgroupState
}

