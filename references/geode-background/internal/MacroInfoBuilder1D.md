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

# class MacroInfoBuilder1D


```cpp
Inherits from MacroInfoBuilder
```



## Functions

### MacroInfoBuilder1D

```cpp
public void MacroInfoBuilder1D(MacroInfoBuilder1D && )
```


### ~MacroInfoBuilder1D

```cpp
public void ~MacroInfoBuilder1D()
```


### update_information

```cpp
public void update_information(const EdgedCurveModifier1D::SplitEdgeInfo & split_info)
```


### update_information

```cpp
public void update_information(const EdgedCurveModifier1D::CollapseEdgeInfo & collapse_info)
```


### MacroInfoBuilder1D

```cpp
protected void MacroInfoBuilder1D(MacroInfo1D & macro_info)
```




