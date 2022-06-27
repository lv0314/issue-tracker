import { rest } from 'msw';

const handlers = [
  rest.get('/issue', (req, res, ctx) => {
    return res(
      ctx.status(200),
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
  rest.get('/labels', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        labels: [
          {
            name: 'FE',
            description: '프론트엔드 이슈',
            color: '#004D23',
            textColor: 'offwhite',
          },
          {
            name: 'BE',
            description: '백엔드 이슈',
            color: '#34C759',
            textColor: 'offwhite',
          },
          {
            name: 'feat',
            description: '새로운 기능 개발',
            color: '#FF3830',
            textColor: 'offwhite',
          },
        ],
      }),
    );
  }),
  rest.get('/milestones', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        milestones: [
          {
            title: '마스터즈 코스',
            description: '코드스쿼드 마스터즈 코스',
            dueDate: '2022-07-01',
          },
          {
            title: 'OAuth 연결',
            description: 'github OAuth2 연결',
            dueDate: '2022-06-28',
          },
          {
            title: '마일스톤 테스트',
            description: '',
            dueDate: '2022-07-30',
          },
          {
            title: '점심 메뉴 고르기',
            description: '추천받아요',
            dueDate: '2022-06-27',
          },
          {
            title: '장마',
            description: '비가 온다',
            dueDate: '2022-07-10',
          },
        ],
      }),
    );
  }),
];

export default handlers;
