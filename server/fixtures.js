if (Rooms.find().count() === 0) {
Rooms.insert({
title: 'Introducing Telescope',
author: 'Sacha Greif'

});
Rooms.insert({
title: 'Meteor',
author: 'Tom Coleman'
});
}
