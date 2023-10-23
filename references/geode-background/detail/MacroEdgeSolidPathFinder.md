<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class MacroEdgeSolidPathFinder


```cpp
Inherits from SolidPathFinder
```



## Functions

### MacroEdgeSolidPathFinder

```cpp
public void MacroEdgeSolidPathFinder(const BackgroundSolid & background, index_t begin, index_t end)
```

### find_path

```cpp
public int find_path()
```



