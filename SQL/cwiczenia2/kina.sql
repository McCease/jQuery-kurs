-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 24 Mar 2015, 18:39
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kina`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `cinemas`
--

CREATE TABLE IF NOT EXISTS `cinemas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `adress` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Zrzut danych tabeli `cinemas`
--

INSERT INTO `cinemas` (`id`, `name`, `adress`) VALUES
(1, 'Luna', 'ul. Marsza³kowska 28'),
(2, 'Silver Screen Pu³awska', 'Centrum Europlex - ul. Pu³awska 17'),
(3, 'Iluzjon Filmoteki Narodowej', 'ul. Narbutta 50a'),
(4, 'Etnokino', 'Ul. Kredytowa 1, Warszawa'),
(5, 'Multikino Z³ote Tarasy', 'ul. Z³ota 59'),
(6, 'Kinoteka', 'pl. Defilad 1'),
(7, 'Cinema City Promenada', 'ul. Ostrobramska 75C'),
(8, 'Praha', 'ul. Jagielloñska 26'),
(9, 'Alchemia', 'ul. Jezuicka 4'),
(10, 'Muranów', 'ul. Zamenhofa 1'),
(11, 'Femina', 'al. Solidarno¶ci 115');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `movies`
--

CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `rating` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Zrzut danych tabeli `movies`
--

INSERT INTO `movies` (`id`, `name`, `description`, `rating`) VALUES
(1, 'Zbuntowana (2015)', 'Beatrice Prior konfrontuje siê z wewnêtrznymi demonami i kontynuuje walkê przeciwko ogromnemu sojuszowi, który mo¿e spowodowaæ rozpad spo³eczeñstwa.', 7),
(2, 'Seks, mi³o¶æ i terapia (2014)', 'Lambert, seksoholik staraj±cy siê zerwaæ z na³ogiem, zatrudnia wiecznie niezaspokojon± nimfomankê.', 5),
(3, 'Ex Machina (2015)', 'Po wygraniu konkursu programista jednej z najwiêkszych firm internetowych zostaje zaproszony do posiad³o¶ci swojego szefa. Na miejsce okazuje siê, ¿e jest czê¶ci± eksperymentu. ', 8),
(4, 'Sils Maria (2014)', 'Wybitna aktorka podczas kilku dni spêdzonych w Alpach ze swoj± asystentk± na nowo odkrywa siebie. ', 7),
(5, 'Chappie (2015)', 'Dwóch gangsterów kradnie policyjnego androida, by wykorzystaæ go do swoich celów. ', 8),
(6, 'Kopciuszek (2015)', 'Po ¶mierci ojca z³a macocha Elli zamienia dziewczynê w s³u¿±c±. Los Kopciuszka odmieni dopiero Dobra Wró¿ka.', 8),
(7, 'S±siady (2014)', 'Ksi±dz odwiedza po kolêdzie kamienicê, odkrywaj±c tajemnice jej lokatorów. ', 3),
(8, 'Z³ota klatka (2013)', 'Sara, nastolatka z Gwatemali, wyrusza w niebezpieczn± podró¿ do Los Angeles w poszukiwaniu lepszego ¿ycia.', 9),
(9, 'Body/Cia³o (2015)', 'Cyniczny prokurator i jego cierpi±ca na anoreksjê córka próbuj± odnale¼æ siê po tragicznej ¶mierci najbli¿szej osoby.', 6),
(10, 'Fru! (2014)', 'Ptaszek, który nigdy wcze¶niej nie wychyli³ dzioba poza rodzinne gniazdo, zostaje przez pomy³kê przewodnikiem stada.', 5),
(11, 'Disco Polo (2015)', 'M³odzi muzycy z prowincji w b³yskawiczny sposób zdobywaj± szczyty list przebojów.', 2),
(12, 'Asteriks i Obeliks: Osiedle Bogów (2014)', 'Juliusz Cezar decyduje siê na budowê dzielnicy mieszkaniowej dla w³a¶cicieli rzymskich i nazywa j± Osiedlem Bogów.', 9);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `payments`
--

CREATE TABLE IF NOT EXISTS `payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` set('karta','gotowka','przelew','nieoplacone') NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `showings`
--

CREATE TABLE IF NOT EXISTS `showings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_id` int(11) NOT NULL,
  `cinema_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `showing` (`movie_id`,`cinema_id`,`date`),
  KEY `movie_id` (`movie_id`),
  KEY `cinema_id` (`cinema_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=7 ;

--
-- Zrzut danych tabeli `showings`
--

INSERT INTO `showings` (`id`, `movie_id`, `cinema_id`, `date`) VALUES
(1, 1, 1, '0000-00-00 00:00:00'),
(2, 1, 1, '2015-03-18 00:00:00'),
(3, 1, 2, '2015-03-10 00:00:00'),
(4, 1, 4, '2015-03-27 00:00:00'),
(5, 1, 7, '2015-03-18 00:00:00'),
(6, 3, 4, '2015-03-18 00:00:00');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tickets`
--

CREATE TABLE IF NOT EXISTS `tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL DEFAULT '0',
  `price` decimal(5,2) NOT NULL DEFAULT '0.00',
  `showings_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `showings_id` (`showings_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Zrzut danych tabeli `tickets`
--

INSERT INTO `tickets` (`id`, `quantity`, `price`, `showings_id`) VALUES
(1, 2, '15.00', 4);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`id`) REFERENCES `tickets` (`id`);

--
-- Ograniczenia dla tabeli `showings`
--
ALTER TABLE `showings`
  ADD CONSTRAINT `showings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `showings_ibfk_2` FOREIGN KEY (`cinema_id`) REFERENCES `cinemas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`showings_id`) REFERENCES `showings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
