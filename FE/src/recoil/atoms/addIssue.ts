import { atom } from 'recoil';

type IssueData = {
  issueTitle: string;
  issueNumber: string;
  issueWriter: string;
  timestamp: string;
  milestone: string;
  label:
    | {
        name: string;
        description: string;
        color: string;
        textColor: string;
      }[]
    | [];
  assignee: { name: string; profileImage: string }[] | [];
  open: boolean;
  comments?: string | null;
};

export const addIssue = atom<IssueData>({
  key: 'addIssue',
  default: {
    issueTitle: '',
    issueNumber: '',
    issueWriter: '',
    timestamp: '',
    milestone: '',
    label: [],
    assignee: [],
    open: true,
  },
});

// comments: [{comment: ~~, author: “”, timestamp: “”, file: “”}]
