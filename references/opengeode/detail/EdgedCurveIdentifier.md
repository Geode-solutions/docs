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

# class EdgedCurveIdentifier


## Functions

### EdgedCurveIdentifier

```cpp
public void EdgedCurveIdentifier<dimension>(const EdgedCurveIdentifier<dimension> & )
```


### operator=

```cpp
public EdgedCurveIdentifier<dimension> & operator=(const EdgedCurveIdentifier<dimension> & )
```


### EdgedCurveIdentifier

```cpp
public void EdgedCurveIdentifier<dimension>(EdgedCurveIdentifier<dimension> && )
```


### operator=

```cpp
public EdgedCurveIdentifier<dimension> & operator=(EdgedCurveIdentifier<dimension> && )
```


### EdgedCurveIdentifier

```cpp
public void EdgedCurveIdentifier<dimension>(const EdgedCurve<dimension> & curve)
```


### ~EdgedCurveIdentifier

```cpp
public void ~EdgedCurveIdentifier<dimension>()
```


### identify_edges

```cpp
public index_t identify_edges()
```


### edge_identifier

```cpp
public index_t edge_identifier(index_t edge_id)
```


### identified_connected_edges

```cpp
public FixedArray identified_connected_edges()
```




# class EdgedCurveIdentifier


# class EdgedCurveIdentifier


# class EdgedCurveIdentifier


