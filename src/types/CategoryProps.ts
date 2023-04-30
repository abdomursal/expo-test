export type CategoryListProps={
    id?:number,
    label? : string,
}

export type CategoryProps = {
    data: CategoryListProps;
    id?: number;
    selected:string;
    onPress: () => void ;
  };