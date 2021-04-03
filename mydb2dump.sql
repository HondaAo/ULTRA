--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: hondaao
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.ar_internal_metadata OWNER TO hondaao;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: hondaao
--

CREATE TABLE public.courses (
    id bigint NOT NULL,
    title character varying,
    charge integer,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.courses OWNER TO hondaao;

--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: hondaao
--

CREATE SEQUENCE public.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.courses_id_seq OWNER TO hondaao;

--
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hondaao
--

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;


--
-- Name: lessons; Type: TABLE; Schema: public; Owner: hondaao
--

CREATE TABLE public.lessons (
    id bigint NOT NULL,
    title character varying,
    description character varying,
    image character varying,
    user_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    charge integer DEFAULT 0
);


ALTER TABLE public.lessons OWNER TO hondaao;

--
-- Name: lessons_id_seq; Type: SEQUENCE; Schema: public; Owner: hondaao
--

CREATE SEQUENCE public.lessons_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lessons_id_seq OWNER TO hondaao;

--
-- Name: lessons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hondaao
--

ALTER SEQUENCE public.lessons_id_seq OWNED BY public.lessons.id;


--
-- Name: payments; Type: TABLE; Schema: public; Owner: hondaao
--

CREATE TABLE public.payments (
    id bigint NOT NULL,
    email character varying,
    token character varying,
    user_id integer,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.payments OWNER TO hondaao;

--
-- Name: payments_id_seq; Type: SEQUENCE; Schema: public; Owner: hondaao
--

CREATE SEQUENCE public.payments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payments_id_seq OWNER TO hondaao;

--
-- Name: payments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hondaao
--

ALTER SEQUENCE public.payments_id_seq OWNED BY public.payments.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: hondaao
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO hondaao;

--
-- Name: users; Type: TABLE; Schema: public; Owner: hondaao
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    username character varying,
    email character varying,
    password_digest character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    teacher boolean DEFAULT false,
    status character varying DEFAULT 'normal'::character varying
);


ALTER TABLE public.users OWNER TO hondaao;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: hondaao
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO hondaao;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hondaao
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: videos; Type: TABLE; Schema: public; Owner: hondaao
--

CREATE TABLE public.videos (
    id bigint NOT NULL,
    image character varying,
    title character varying,
    video character varying,
    lesson_id bigint,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.videos OWNER TO hondaao;

--
-- Name: videos_id_seq; Type: SEQUENCE; Schema: public; Owner: hondaao
--

CREATE SEQUENCE public.videos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.videos_id_seq OWNER TO hondaao;

--
-- Name: videos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hondaao
--

ALTER SEQUENCE public.videos_id_seq OWNED BY public.videos.id;


--
-- Name: courses id; Type: DEFAULT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);


--
-- Name: lessons id; Type: DEFAULT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.lessons ALTER COLUMN id SET DEFAULT nextval('public.lessons_id_seq'::regclass);


--
-- Name: payments id; Type: DEFAULT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.payments ALTER COLUMN id SET DEFAULT nextval('public.payments_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: videos id; Type: DEFAULT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.videos ALTER COLUMN id SET DEFAULT nextval('public.videos_id_seq'::regclass);


--
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: hondaao
--

COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	development	2020-12-10 00:38:55.868956	2020-12-10 00:38:55.868956
\.


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: hondaao
--

COPY public.courses (id, title, charge, created_at, updated_at) FROM stdin;
1	Ninja	9	2020-12-12 05:18:38.811128	2020-12-12 05:18:38.811128
2	Golem	19	2020-12-12 05:18:38.820187	2020-12-12 05:18:38.820187
3	Dragon	29	2020-12-12 05:18:38.824628	2020-12-12 05:18:38.824628
\.


--
-- Data for Name: lessons; Type: TABLE DATA; Schema: public; Owner: hondaao
--

COPY public.lessons (id, title, description, image, user_id, created_at, updated_at, charge) FROM stdin;
3	MERN Stack EC site	This course will be building ECsite by using React.js, MongoDB, Node.js	https://thumbs.dreamstime.com/b/hand-red-pen-cofee-cup-stick-keyboard-white-background-react-js-sign-notepad-hand-red-pen-cofee-cup-stick-196445226.jpg	1	2020-12-11 09:12:43.662101	2020-12-11 09:12:43.662101	0
2	Learn React.js with me	This guide is for people who are starting with React. I have carefully curated the best videos and articles in each section to make it easier for learning.	https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500	3	2020-12-11 08:49:33.463143	2020-12-12 06:35:26.834376	0
\.


--
-- Data for Name: payments; Type: TABLE DATA; Schema: public; Owner: hondaao
--

COPY public.payments (id, email, token, user_id, created_at, updated_at) FROM stdin;
1	testuser@test.com	tok_1HximIE3hSvEQEMsEMcETaD5	3	2020-12-13 00:49:35.761349	2020-12-13 00:49:35.761349
2	testuser@test.com	tok_1HximKE3hSvEQEMsobjOFCLn	3	2020-12-13 00:49:37.581128	2020-12-13 00:49:37.581128
3	testuser@test.com	tok_1HxjHLE3hSvEQEMswsP6Ub5C	3	2020-12-13 01:21:40.590559	2020-12-13 01:21:40.590559
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: hondaao
--

COPY public.schema_migrations (version) FROM stdin;
20201210003514
20201210082205
20201211010557
20201211011411
20201211064220
20201211090627
20201212050917
20201212092959
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: hondaao
--

COPY public.users (id, username, email, password_digest, created_at, updated_at, teacher, status) FROM stdin;
1	Ao	test@test.com	$2a$12$LpYHnR56gG/k5hdm60Ilhurw8v63Z5BKBcEBNBp1Mtn1zSu5QtjDy	2020-12-10 01:53:18.629977	2020-12-10 01:53:18.629977	f	normal
2	honda	honda@test.com	$2a$12$p9UgG5LI/K2AQBD0/lxL0eX6jXtcat4/DdwjL4e5fDtgUpNov/ATq	2020-12-12 02:10:52.076927	2020-12-12 02:10:52.076927	f	normal
3	TestUser	testuser@test.com	$2a$12$AspxOfn3L33p6MyYARUbqOxmQNm/RXsKhBfJgDZnMkDVVFJ9ArxQK	2020-12-12 02:24:43.966869	2020-12-13 00:49:35.776323	f	Ninja
\.


--
-- Data for Name: videos; Type: TABLE DATA; Schema: public; Owner: hondaao
--

COPY public.videos (id, image, title, video, lesson_id, created_at, updated_at) FROM stdin;
1	https://img.freepik.com/free-vector/single-page-application-abstract-concept-illustration-spa-web-page-web-development-trend-app-inside-browser-dynamically-rewriting-page-responsive-website-creation_335657-899.jpg?size=338&ext=jpg&ga=GA1.2.2002534242.1607677178	React tutorial	\N	\N	2020-12-14 07:57:18.760739	2020-12-14 07:57:18.760739
2	https://img.freepik.com/free-vector/single-page-application-abstract-concept-illustration-spa-web-page-web-development-trend-app-inside-browser-dynamically-rewriting-page-responsive-website-creation_335657-899.jpg?size=338&ext=jpg&ga=GA1.2.2002534242.1607677178	React tutorial	\N	\N	2020-12-14 08:00:02.196603	2020-12-14 08:00:02.196603
3	https://www.freepik.com/premium-vector/programming-software-app-development-isometric-concept-big-data-processing-illustration_10035877.htm#query=Javascript&position=10	React tutorial	\N	\N	2020-12-14 08:02:22.967654	2020-12-14 08:02:22.967654
4	https://www.freepik.com/premium-vector/programming-software-app-development-isometric-concept-big-data-processing-illustration_10035877.htm#query=Javascript&position=10	React tutorial	\N	\N	2020-12-14 08:03:14.094808	2020-12-14 08:03:14.094808
5	https://www.freepik.com/premium-vector/programming-software-app-development-isometric-concept-big-data-processing-illustration_10035877.htm#query=Javascript&position=10	React tutorial	\N	\N	2020-12-14 08:07:10.146088	2020-12-14 08:07:10.146088
6	https://www.freepik.com/premium-vector/programming-software-app-development-isometric-concept-big-data-processing-illustration_10035877.htm#query=Javascript&position=10	React tutorial	\N	2	2020-12-14 08:28:22.883296	2020-12-14 08:28:22.883296
\.


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hondaao
--

SELECT pg_catalog.setval('public.courses_id_seq', 3, true);


--
-- Name: lessons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hondaao
--

SELECT pg_catalog.setval('public.lessons_id_seq', 3, true);


--
-- Name: payments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hondaao
--

SELECT pg_catalog.setval('public.payments_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hondaao
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: videos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hondaao
--

SELECT pg_catalog.setval('public.videos_id_seq', 6, true);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- Name: lessons lessons_pkey; Type: CONSTRAINT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_pkey PRIMARY KEY (id);


--
-- Name: payments payments_pkey; Type: CONSTRAINT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: videos videos_pkey; Type: CONSTRAINT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.videos
    ADD CONSTRAINT videos_pkey PRIMARY KEY (id);


--
-- Name: index_lessons_on_user_id; Type: INDEX; Schema: public; Owner: hondaao
--

CREATE INDEX index_lessons_on_user_id ON public.lessons USING btree (user_id);


--
-- Name: index_videos_on_lesson_id; Type: INDEX; Schema: public; Owner: hondaao
--

CREATE INDEX index_videos_on_lesson_id ON public.videos USING btree (lesson_id);


--
-- Name: lessons fk_rails_6027eb145c; Type: FK CONSTRAINT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT fk_rails_6027eb145c FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: videos fk_rails_62de3b4340; Type: FK CONSTRAINT; Schema: public; Owner: hondaao
--

ALTER TABLE ONLY public.videos
    ADD CONSTRAINT fk_rails_62de3b4340 FOREIGN KEY (lesson_id) REFERENCES public.lessons(id);


--
-- PostgreSQL database dump complete
--

