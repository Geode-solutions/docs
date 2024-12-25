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

### InsertionGraphPerformer

```cpp
public void InsertionGraphPerformer(ElementGraph & elements)
```


### ~InsertionGraphPerformer

```cpp
public void ~InsertionGraphPerformer()
```


### analyze_graph

```cpp
public void analyze_graph()
```


### process_subgraphs

```cpp
public void process_subgraphs(SubGraphAction & action)
```


### edit_graph

```cpp
public void edit_graph()
```




