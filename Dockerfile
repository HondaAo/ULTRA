FROM ruby:2.5

RUN apt-get update -qq && \
    apt-get install -y build-essential \
            libpq-dev \
            nodejs \
            postgresql-client \
            yarn

RUN mkdir /app

ENV APP_ROOT /app
WORKDIR $APP_ROOT

ADD ./Gemfile $APP_ROOT/Gemfile
ADD ./Gemfile.lock $APP_ROOT/Gemfile.lock

RUN gem update bundler && bundle install

ADD  . /app

EXPOSE 3000