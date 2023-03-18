import { server } from "../fetch";

export const fetchReport = async () => {
  const res2 = await fetch(`${server}/report`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const report = await res2.json();

  return report;
};

export const fetchCase = async () => {
  const res2 = await fetch(`${server}/case`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const study = await res2.json();

  const res3 = await fetch(`${server}/caseStory`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const story = await res3.json();

  return { study, story };
};

export const fetchArticle = async () => {
  const res2 = await fetch(`${server}/article`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const article = await res2.json();

  return article;
};

export const fetchLoanType = async () => {
  const res2 = await fetch(`${server}/loanType`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const loanType = await res2.json();

  return loanType;
};
