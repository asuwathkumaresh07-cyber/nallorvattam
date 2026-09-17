# -*- coding: utf-8 -*-
out = open(r'c:\Users\Acer\Downloads\test\register.js', 'w', encoding='utf-8')
out.write(open(r'c:\Users\Acer\Downloads\test\_js_src.txt', encoding='utf-8').read())
out.close()
print('Done:', __import__('os').path.getsize(r'c:\Users\Acer\Downloads\test\register.js'), 'bytes')
