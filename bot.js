{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "name": "Untitled2.ipynb",
      "provenance": [],
      "authorship_tag": "ABX9TyNLscWDhT1C0LJTll61ZImz",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/TEAMVALOR786-Official/Tvalordevlopment/blob/main/bot.js\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "metadata": {
        "id": "RHXNewRIA4yv"
      },
      "source": [
        "import pandas as pd\n",
        "import asyncio\n",
        "#The below code verifies the \"client\".\n",
        "!pip install discord\n",
        "!pip install python-dotenv\n",
        "!pip install asyncio\n",
        "import os\n",
        "\n",
        "import discord\n",
        "from dotenv import load_dotenv\n",
        "TOKEN = os.getenv('ODMxOTgwMjE4MzIyMzg3MDI1.YHdH9Q.osOA9OXyh8TSUAuDgBV9d257CnU')\n",
        "\n",
        "client = discord.Client()\n",
        "\n",
        "\n",
        "@client.event\n",
        "async def on_ready():\n",
        "    print(f'{client.user} has connected to Discord!')\n",
        "    client.run(TOKEN)\n",
        "@client.event\n",
        "async def on_command_error(ctx, error):\n",
        "    if isinstance(error, commands.MissingRequiredArgument):\n",
        "        await ctx.send('Please mention a user or add a reason, Do not mention 2 people as it will ban the person with the smallest ID that is mentioned. :rolling_eyes:.')\n",
        "    if isinstance(error, commands.MissingPermissions):\n",
        "        await ctx.send(\":x: You dont have all the required perms! you need ``ban members`` :x:\")\n",
        "\n",
        "#The below code bans player.\n",
        "async def ban(ctx, member : discord.Member, *, reason = None):\n",
        "    await member.ban(reason = reason)\n",
        "    @client.command()\n",
        "    @commands.has_any_role(\"Keyblade Master\",\"Foretellers\")\n",
        "    async def ban (ctx, member:discord.User=None, reason =None):\n",
        "      if member == None or member == ctx.message.author:\n",
        "          await ctx.channel.send(\"You cannot ban yourself\")\n",
        "          return\n",
        "      if reason == None:\n",
        "        reason = \"Banned without reason\"\n",
        "    message = f\":hammer: You were banned from {ctx.guild.name} for {reason}\"\n",
        "    await member.send(message)\n",
        "    # await ctx.guild.ban(member, reason=reason)\n",
        "    await ctx.channel.send(f\"{member} got :hammer: banned\")"
      ],
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "metadata": {
        "id": "s7HgRZ4pTEB3"
      },
      "source": [
        "client.run(TOKEN)"
      ],
      "execution_count": null,
      "outputs": []
    }
  ]
}