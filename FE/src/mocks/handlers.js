import { rest } from 'msw';

const handlers = [
  rest.get('/issue', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        issues: [
          {
            issueTitle: '이슈테스트',
            issueNumber: 1,
            issueWriter: 'Dott',
            timestamp: new Date(2022, 5, 23, 21, 30),
            milestone: { title: 'feat' },
            label: [{ name: '테스트' }],
            assignee: [
              {
                name: 'Dott',
                profileImage:
                  'https://ca.slack-edge.com/T74H5245A-U02RA7K501L-3c55992367ca-512',
              },
            ],
            open: true,
          },
          {
            issueTitle: '이슈테스트2',
            issueNumber: 2,
            issueWriter: 'ver',
            timestamp: new Date(2022, 5, 23, 22),
            milestone: null,
            label: [{ name: 'fe' }],
            assignee: [
              {
                name: 'dott',
                profileImage:
                  'https://ca.slack-edge.com/T74H5245A-U02RA7K501L-3c55992367ca-512',
              },
              {
                name: 'ver',
                profileImage:
                  'https://ca.slack-edge.com/T74H5245A-U02RZEM30AX-d54a4bce1cd4-512',
              },
            ],
            open: true,
          },
          {
            issueTitle: '이슈테스트3',
            issueNumber: 3,
            issueWriter: '선을로',
            timestamp: new Date(2022, 5, 22),
            milestone: { title: 'be' },
            label: [{ name: '선을로' }],
            assignee: [
              {
                name: '선을로',
                profileImage:
                  'https://ca.slack-edge.com/T74H5245A-U02RS3WKUMQ-e300c83654fb-72',
              },
            ],
            open: true,
          },
        ],
      }),
    );
  }),
];

export default handlers;
