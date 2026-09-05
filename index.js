require('dotenv').config();

const {
    Client,
    GatewayIntentBits,
    EmbedBuilder
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

const WELCOME_CHANNEL = '1543020810917118054';
const AUTO_ROLE = '1531927521832996895';

const WELCOME_IMAGE = 'https://cdn.discordapp.com/attachments/1543024055605661789/1543024268001157170/mentahan_Wellcome_dark_white.jpg?ex=6a935cd5&is=6a920b55&hm=0a13a6d94e14423bfe34107086689a0da573eb89c9cfbc236abb01c09c14c5c6&';

client.once('clientReady', () => {
    console.log(`${client.user.tag} Online`);
});

client.on('guildMemberAdd', async (member) => {

    try {

        console.log(`📥 New member: ${member.user.tag}`);

        const role = await member.guild.roles.fetch(AUTO_ROLE).catch(() => 1531927521832996895);

        if (!role) {
            console.log('❌ Role not found');
        } else {

            await member.roles.add(role).catch(err => {
                console.log('❌ Failed to add role:', err);
            });

            console.log(`✅ Role added to ${member.user.tag}`);
        }

        const channel = await member.guild.channels.fetch(WELCOME_CHANNEL).catch(() => 1531927525704597592);

        if (!channel) {
            console.log('❌ Welcome channel not found');
            return;
        }

        const embed = new EmbedBuilder()
            .setColor('#1E1F22')
            .setAuthor({
                name: member.user.username,
                iconURL: member.user.displayAvatarURL({ size: 1024 })
            })
            .setTitle('Welcome to [TEAM M7FOFH]')
            .setDescription(`Welcome ${member} to the server 👋`)
            .addFields(
                {
                    name: '👤 Member',
                    value: `${member}`,
                    inline: true
                },
                {
                    name: '📅 Account Age',
                    value: `<t:${Math.floor(member.user.createdTimestamp / 1000)}:R>`,
                    inline: true
                },
                {
                    name: '👥 Members Count',
                    value: `${member.guild.memberCount}`,
                    inline: true
                }
            )
            .setThumbnail(member.user.displayAvatarURL({ size: 1024 }))
            .setImage(WELCOME_IMAGE)
            .setTimestamp()
            .setFooter({
                text: 'Developed by Eng.xFazq',
                iconURL: member.guild.iconURL()
            });

        await channel.send({
            content: `${member}`,
            embeds: [embed]
        });

    } catch (err) {
        console.log('❌ Error in guildMemberAdd:', err);
    }

});

client.login(process.env.TOKEN);