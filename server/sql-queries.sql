
-- CREATING A NEW LOCATION 
INSERT INTO `locations` (`
city`,
`state
`) VALUES
(${city}, ${state});

-- CREATING A NEW ROOM
INSERT INTO `rooms` (`
name`,
`locationID
`)
SELECT $
{name}, ${locationID} FROM `locations` WHERE `city` = ${city}

-- CREATING A NEW BOARD 
INSERT INTO `boards` (`
name`,
`roomID
`)
SELECT $
{name}, ${roomID} FROM `rooms` WHERE `name` = ${room-name}

-- CREATING A NEW PANEL
INSERT INTO `panels` (`
name`,
`boardID
`)
SELECT $
{name}, ${boardID} FROM `boards` WHERE `name` = ${board-name}



