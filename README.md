Allez sur :
github.com/franckmonmardy-cell/loto-ci/new/main
         ↓
Dans le nom tapez :
vercel.json
         ↓
Collez ce contenu :
{
  "version": 2,
  "builds": [
    { "src": "index.html", "use": "@vercel/static" }
  ],
  "routes":
