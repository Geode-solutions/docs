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

# class CrossSectionOutput


```cpp
Inherits from Output<CrossSection>
```



## Functions

### ~CrossSectionOutput

```cpp
public void ~CrossSectionOutput()
```


### CrossSectionOutput

```cpp
protected void CrossSectionOutput(string_view filename)
```




