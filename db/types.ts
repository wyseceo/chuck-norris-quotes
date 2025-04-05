export interface IVisitor {
  id: number;
  count: number;
}

export interface NextProps {
  next?: {
    cache?: string;
    tags?: string[]; // Expecting an array of strings inside next
  };
}
