CREATE DATABASE crudb;
USE crudb;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Dez-2023 às 21:28
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `crudb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `perfil`
--

CREATE TABLE `perfil` (
  `id` int(11) NOT NULL,
  `nome` varchar(300) NOT NULL,
  `idade` int(3) NOT NULL,
  `email` varchar(300) NOT NULL,
  `senha` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `perfil`
--

INSERT INTO `perfil` (`id`, `nome`, `idade`, `email`, `senha`) VALUES
(1, 'Eliana Vieira Barreto Viturino', 48, 'eliana@email.com', 'Renat0'),
(3, 'Ellen Viturino', 12, 'ellen@email.com', 'E113nTV'),
(4, 'Reginaldo Viturino', 52, 'reginaldo@email.com', 'R3g155A'),
(13, 'Renato Viturino', 18, 'renato@email.com', 'Renat0'),
(14, 'Bernadina', 28, 'bshackle0@sfgate.com', 'zT5uP!GKkGqv'),
(15, 'Melody', 58, 'mbaptista1@networkadvertising.org', 'wL1JCL'),
(16, 'Nissie', 108, 'npottery2@nydailynews.com', 'kY68bl<r'),
(17, 'Danita', 175, 'dledrane3@meetup.com', 'sA9?(NI'),
(18, 'Anabal', 39, 'ahapgood4@phoca.cz', 'nM9N\"h+UjUA'),
(19, 'Ted', 128, 'tdowdam5@phpbb.com', 'fA67Q?'),
(20, 'Kristian', 168, 'kjirick6@nbcnews.com', 'mA1v500WL'),
(21, 'Gwyn', 80, 'ghynd7@cbsnews.com', 'wR6\rV8O5'),
(22, 'Clarissa', 62, 'cbrood8@cbsnews.com', 'vW7?|j95H'),
(23, 'Aubine', 54, 'acaskey9@abc.net.au', 'mU5~j%IQBg?n'),
(24, 'Hilarius', 37, 'hconeaua@liveinternet.ru', 'wU1+>QmF)&u'),
(25, 'Hali', 96, 'hengelmannb@yale.edu', 'rN5=|?COT,e'),
(26, 'Perceval', 151, 'ppindredc@tmall.com', 'jT6PW,}jKofG'),
(27, 'Milzie', 170, 'mhattigand@wufoo.com', 'gT62Mcj~v'),
(28, 'Rafaello', 111, 'rrosenshinee@booking.com', 'pV7z\'u'),
(29, 'Christos', 175, 'ccoreyf@tuttocitta.it', 'pO8SkY(r1'),
(30, 'Sydel', 10, 'sbrandenbergg@intel.com', 'tK9k%Lw5S!`R'),
(31, 'Robinett', 182, 'rhakesh@surveymonkey.com', 'nM25K'),
(32, 'Nathalia', 171, 'njailleri@noaa.gov', 'uJ7mw*UACTa'),
(33, 'Pren', 187, 'pduellj@webmd.com', 'rD8/mETN)U'),
(34, 'Osbert', 155, 'ocoldicottk@bloomberg.com', 'bU8xMMg$=CW'),
(35, 'Clark', 115, 'cshearl@cpanel.net', 'gJ4tQbw,ug='),
(36, 'Griselda', 188, 'gwroutm@netscape.com', 'tV0g((k0)+'),
(37, 'Rollin', 188, 'rmorlingn@ucsd.edu', 'qF4\"C?1(j_'),
(38, 'Clark', 39, 'cbraamso@goo.ne.jp', 'aH8H89'),
(39, 'Averill', 30, 'aarnop@live.com', 'sZ7`qQh$'),
(40, 'Betsy', 91, 'bdudingq@barnesandnoble.com', 'mI7?hP'),
(41, 'Marlon', 161, 'mheeranr@washington.edu', 'fU08w,zxSo,I'),
(42, 'Lissa', 188, 'lhaddys@theatlantic.com', 'vJ979y6'),
(43, 'Kean', 186, 'ksilcoxt@sbwire.com', 'yF9H%#1'),
(44, 'Farlay', 65, 'fzannettiu@qq.com', 'jJ9)9nP*~vD'),
(45, 'Dre', 85, 'dstutardv@mozilla.com', 'yI5??<v\'B2u'),
(46, 'Ashia', 158, 'acorainw@npr.org', 'zG8!\'Kz1'),
(47, 'Dalton', 43, 'danningx@globo.com', 'zW5s$es!,vj'),
(48, 'Moselle', 105, 'mpurchasey@oakley.com', 'yC3Ptz6a\"x'),
(49, 'Gerrie', 5, 'ginglesez@japanpost.jp', 'oM0LJ.l!+R~'),
(50, 'Ab', 75, 'ajewster10@chicagotribune.com', 'cK7dC($IV0Dy'),
(51, 'Lilllie', 86, 'lsackey11@tumblr.com', 'iM8|0=iby,\"'),
(52, 'Terri', 84, 'tfilip12@engadget.com', 'kI67y=5A\'rpj'),
(53, 'Moishe', 185, 'mpittendreigh13@google.com', 'kP07oeMwH!%z'),
(54, 'Candide', 66, 'cjaycock14@digg.com', 'lK7RQFB3Rt?P'),
(55, 'Hartwell', 25, 'hdincey15@smugmug.com', 'dA8QR6qvMRMS'),
(56, 'Coop', 120, 'cmaylam16@tiny.cc', 'rU7}n8'),
(57, 'Dale', 61, 'driseam17@wikipedia.org', 'yQ4a}(#q'),
(58, 'Essie', 192, 'ereinert18@discuz.net', 'yM7*3D+W29'),
(59, 'Katerina', 67, 'kgebbe19@google.co.jp', 'hX0FzFvCso'),
(60, 'Aloisia', 138, 'agniewosz1a@java.com', 'jJ9351oe!}n'),
(61, 'Aeriell', 25, 'aconey1b@cbc.ca', 'zT8G<|!f'),
(62, 'Michal', 66, 'mmanneville1c@army.mil', 'lG725D'),
(63, 'Tiff', 3, 'tlintill1d@surveymonkey.com', 'aZ3|k${)$fpR'),
(64, 'Elfrida', 116, 'eead1e@netscape.com', 'sI1~QAVCySVV'),
(65, 'Ki', 94, 'kleaman1f@accuweather.com', 'iC6Qu1_J'),
(66, 'Claus', 165, 'cdebell1g@msu.edu', 'dB9SJdb'),
(67, 'Roy', 15, 'rsudddard1h@bbb.org', 'dZ2B$>'),
(68, 'Craggy', 24, 'ckuhnwald1i@msu.edu', 'jT5k0~\'8<g'),
(69, 'Geneva', 193, 'gflecknell1j@census.gov', 'aL4o/8_AN}Q'),
(70, 'Herb', 44, 'hbourdas1k@oaic.gov.au', 'oG4S,K`Xy\"4'),
(71, 'Hadlee', 154, 'hbellchamber1l@instagram.com', 'lV3tX\"l'),
(72, 'Shayla', 31, 'skalisz1m@guardian.co.uk', 'zT56nDg|'),
(73, 'Luis', 85, 'lmattessen1n@cargocollective.com', 'zF8akWPtvS#'),
(74, 'Lissi', 103, 'ldahlborg1o@ucoz.ru', 'zK8grNhi3W3'),
(75, 'Elwin', 22, 'ecrompton1p@slashdot.org', 'cB6aqmHa*'),
(76, 'Olivia', 57, 'ostanmer1q@seattletimes.com', 'pL4rA0l'),
(77, 'Fritz', 60, 'fjumeau1r@quantcast.com', 'cW0CpO'),
(78, 'Wesley', 53, 'wfreiburger1s@theglobeandmail.com', 'kD1\'aQzE*'),
(79, 'Dory', 131, 'dmary1t@drupal.org', 'yR3!AuQfx'),
(80, 'Courtney', 37, 'carling1u@msu.edu', 'lN99iMg{.?/R'),
(81, 'Janina', 174, 'jstedson1v@ow.ly', 'xH2uQ,m$'),
(82, 'Simone', 2, 'sbooker1w@oaic.gov.au', 'oN2kQ('),
(83, 'Thorndike', 70, 'tkiddell1x@e-recht24.de', 'zP3P$$\'4Tq'),
(84, 'Marena', 56, 'mtomasoni1y@nba.com', 'rN0kF%<'),
(85, 'Carlo', 115, 'cladbrook1z@examiner.com', 'hM9H~#m8a'),
(86, 'Babette', 133, 'bdonke20@boston.com', 'iK4L!/'),
(87, 'Monah', 30, 'mwaadenburg21@chronoengine.com', 'iP7iBLp%0kv'),
(88, 'Marabel', 165, 'mscading22@zimbio.com', 'tD9%dKea&'),
(89, 'Tiebout', 191, 'theinssen23@businessinsider.com', 'fV2|g1l&sj<?'),
(90, 'Carma', 64, 'coreagan24@bloglines.com', 'eD8H7gv3(}p$'),
(91, 'Rockwell', 14, 'rkelemen25@omniture.com', 'gC2Kw}3'),
(92, 'Meggie', 194, 'mlinturn26@friendfeed.com', 'sZ4rnx~C'),
(93, 'Lilith', 179, 'lpaulo27@unesco.org', 'iW7u,I'),
(94, 'Denni', 168, 'dduhig28@ucla.edu', 'mP8VXl'),
(95, 'Boniface', 195, 'bpadfield29@howstuffworks.com', 'rP5/I\''),
(96, 'Karlik', 158, 'khurley2a@php.net', 'vD9et8'),
(97, 'Lauritz', 72, 'lhabert2b@stanford.edu', 'wG4WnB'),
(98, 'Chickie', 140, 'cpinar2c@delicious.com', 'rE5M~dw9=M+'),
(99, 'Marilin', 46, 'mkelling2d@nature.com', 'rK2a+Y/R~|O'),
(100, 'Faulkner', 123, 'fhuortic2e@surveymonkey.com', 'bB3+\'*%v%}7'),
(101, 'Delainey', 142, 'dshard2f@redcross.org', 'tS9Z}b?Y/4<_'),
(102, 'Ebba', 177, 'eportal2g@hugedomains.com', 'nP4%VwD'),
(103, 'Base', 78, 'bkeave2h@netlog.com', 'lF6}S(,'),
(104, 'Franny', 112, 'fbeevers2i@go.com', 'cH6!!N%'),
(105, 'Dulcinea', 183, 'dewestace2j@about.com', 'qH7j8)G1A'),
(106, 'Lynne', 53, 'lblaszczak2k@deviantart.com', 'cI40\'@Cb%KG'),
(107, 'Nollie', 79, 'nsinton2l@imageshack.us', 'wJ9EAVs.421'),
(108, 'Hugibert', 44, 'hdwelly2m@telegraph.co.uk', 'xZ1TNP|njm$8'),
(109, 'Ollie', 38, 'othroughton2n@ft.com', 'rY2<7Yx2rn\''),
(110, 'Mic', 103, 'mroberds2o@arstechnica.com', 'kC0Wl=Z#1+E'),
(111, 'Carolee', 32, 'cvanesp@miibeian.gov.cn', 'jQ8C9<Wl/oF');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `perfil`
--
ALTER TABLE `perfil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
