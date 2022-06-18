const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /.+\@.+\..+/
    },
    thoughts: [//Array of _id values referencing the Thought model
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [//Array of _id values referencing the User model
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

// User model
const User = model('User', UserSchema);

// Total count of friends using virtuals
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

module.exports = User;