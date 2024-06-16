inp='aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza'
arr=[]
for j in range(0,len(inp),2):
    arr.append(inp[j:j+2])
print(arr)
countrydict={}
for code in arr:
    countrydict[code]=input('\nEnter country name for code '+code+'\n')
print(countrydict)