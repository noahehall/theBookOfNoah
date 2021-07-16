FROM localstack/localstack-full:0.12.5 as base

FROM base as dev
COPY ./buildandrun.sh ./env.list .

