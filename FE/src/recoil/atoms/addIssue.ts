import { atom } from 'recoil';

type IssueData = {
  issueTitle: string | null;
  issueNumber: string | null;
  issueWriter: string | null;
  timestamp: string | null;
  milestone: string | null;
  label: string | null;
  assignee: string | null;
  open: string | null;
};

export const addIssue = atom<IssueData>({
  key: 'addIssue',
  default: {
    issueTitle: null,
    issueNumber: null,
    issueWriter: null,
    timestamp: null,
    milestone: null,
    label: null,
    assignee: null,
    open: null,
  },
});
