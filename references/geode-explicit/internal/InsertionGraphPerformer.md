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

# class InsertionGraphPerformer


## Functions

### ~InsertionGraphPerformer

```cpp
public void ~InsertionGraphPerformer()
```


### process_subgraphs

```cpp
public OldToNews process_subgraphs(SubGraphAction & action)
```


### InsertionGraphPerformer

```cpp
public void InsertionGraphPerformer(ElementGraph & elements)
```


### analyze_graph

```cpp
public void analyze_graph(bool parallel)
```


### edit_graph

```cpp
public void edit_graph(const OldToNews & old_to_news)
```




