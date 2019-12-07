-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 07, 2019 at 04:25 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolioData`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_work`
--

CREATE TABLE `tbl_work` (
  `ID` int(11) NOT NULL,
  `Image` varchar(50) NOT NULL,
  `Title` varchar(20) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `Madewith` varchar(100) NOT NULL,
  `links` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_work`
--

INSERT INTO `tbl_work` (`ID`, `Image`, `Title`, `Description`, `Madewith`, `links`) VALUES
(1, 'gif_project.gif', 'Mwah', 'While not a complete illustration, this piece was used for a client’s fashion brand start-up. It was made in 2018 and was originally animated as a gif where the circles would move along the spline and the pink tears would drop but the client liked it better as a still image. \r\n', 'Adobe Photoshop', ''),
(2, 'sippity_drinkity.jpg', 'Sippity Drinkity', 'In 2017, a friend was starting a t-shirt business and asked if I could draft some designs for her. With no ideas herself, she gave me full creative freedom except for one instruction: make it kind of weird. I sketched out ordinary objects first but then added unusual objects and patterns in its surroundings.  The wine glass full of odd objects appealed to me most, so I scan the sketch, traced it and gave it colour in Adobe Illustrator, and made the finishing touches in Adobe Photoshop. ', 'Sketching, Adobe Illustrator, Adobe Photoshop', ''),
(3, 'eyeball.jpg', 'Eyefall', 'This piece was sketched in 2016 and not intended for any client, only my own interest. Coming across the sketch in 2019, I had decided to bring it to Adobe Illustrator and Photoshop to digitize it. ', 'Sketching, Adobe Illustrator, Adobe Photoshop', ''),
(4, 'matchstick_project.png', 'Matchstick', 'Matchstick was a group project with the goal to establish a faux advertising company and my position was Motion Designer. I created a promotional trailer for the company, highlighting the specialties of graphic design, branding, and web development. \r\n', 'Adobe After Effects, Adobe Premiere Pro', 'https://www.youtube.com/watch?v=8pZ-_E1quxk'),
(5, 'sportsnet_project.png', 'Sportsnet', 'As a class assignment, the task was to model an intro for the NFL on Sportsnet. The objects in the video were made in Cinema 4D, as well as the camera pans and animations. Once those clips were rendered, they were taking in Adobe After Effects to adjust contrast, add lens flares, and had hue adjustments. \r\n', 'Cinema 4D, Adobe After Effects', 'https://youtu.be/xdueSi_zvwA'),
(6, 'organ_project.png', 'Reorganize', 'This is a promotional video for an organ cellular regeneration campaign as a group project. The goal in mind for making the video was to explain the process in a clear and concise way with animated images as support. I wrote the script and recording the voice-over myself using the voice-recording application from my iPhone. \r\n', 'Adobe After Effects, Adobe Premiere Pro', 'https://youtu.be/9myqK3YfnbE'),
(7, 'orbit.png', 'Orbit', 'As an individual class assignment, we were tasked with designing a smartphone with a new translucent material. The phone I had designed was called Orbit and came in an oval-like packaging as displayed. ', 'Adobe Photoshop', ''),
(8, 'arbora.jpg', 'Arbora', 'In the design challenge to create a free-standing display for Arbora and their three plant products, I created a multi-level display. There is a level for each different product, the label of the plant name on each level, and I designed a tree pattern to decorate the levels, bringing that in as a texture for the 3D model. ', 'Cinema 4D, Adobe Illustrator, Adobe Photoshop', ''),
(9, 'tempus.png', 'Tempus', 'The goal was to design a Bluetooth speaker with its functionality and its packaging. I went for a hipster 70’s style to my design, merging the chic style with the technology of today. The speakers come as one but are able to magnetically come apart and be put in different areas of the room. \r\n', 'Adobe Illustrator, Adobe Photoshop', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_work`
--
ALTER TABLE `tbl_work`
  ADD PRIMARY KEY (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
