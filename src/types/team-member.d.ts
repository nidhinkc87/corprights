interface TeamMemberAttributes extends EntityAttributes {
  id: number;
  documentId: string;
  name: string;
  designation: string;
  image: Image;
  content: string;
  linkedin: string;
}
type TeamMember = {} & TeamMemberAttributes;
