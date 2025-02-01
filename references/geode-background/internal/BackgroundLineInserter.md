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

# class BackgroundLineInserter


## Functions

### BackgroundLineInserter

```cpp
public void BackgroundLineInserter(ModifiableBackgroundLine & line, BackgroundLineBuilder & builder)
```


### ~BackgroundLineInserter

```cpp
public void ~BackgroundLineInserter()
```


### insert_curve

```cpp
public ElementInsertionInfo insert_curve(const EdgedCurve1D & mesh)
```


### insert_curve_edges

```cpp
public ElementInsertionInfo insert_curve_edges(const EdgedCurve1D & mesh, Span edge_ids)
```




