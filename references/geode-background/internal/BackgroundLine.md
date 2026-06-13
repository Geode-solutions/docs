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

# class BackgroundLine


```cpp
Inherits from MacroInfo1D
```



## Functions

### BackgroundLine

```cpp
public void BackgroundLine(const EdgedCurve1D & line)
```


### BackgroundLine

```cpp
public void BackgroundLine(BackgroundLine && other)
```


### ~BackgroundLine

```cpp
public void ~BackgroundLine()
```


### line

```cpp
public const EdgedCurve1D & line()
```


### clone

```cpp
public std::tuple<std::unique_ptr<EdgedCurve1D>, std::unique_ptr<BackgroundLine>> clone()
```


### clone_line

```cpp
public std::unique_ptr<EdgedCurve1D> clone_line()
```


### macro_edge_path

```cpp
public std::optional<std::vector<index_t>> macro_edge_path(const std::array<index_t, 2> & edge_vertices, const MeshEdge & macro_edge)
```




