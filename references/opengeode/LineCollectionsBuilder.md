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

# class LineCollectionsBuilder


# class LineCollectionsBuilder


## Functions

### load_line_collections

```cpp
public void load_line_collections(basic_string_view directory)
```


### set_line_collection_name

```cpp
public void set_line_collection_name(const uuid & id, basic_string_view name)
```


### set_line_collection_active

```cpp
public void set_line_collection_active(const uuid & id, bool active)
```


### LineCollectionsBuilder

```cpp
protected void LineCollectionsBuilder<dimension>(LineCollections<dimension> & collections)
```


### create_line_collection

```cpp
protected const uuid & create_line_collection()
```


### create_line_collection

```cpp
protected void create_line_collection(uuid line_collection_id)
```


### delete_line_collection

```cpp
protected void delete_line_collection(const LineCollection<dimension> & collection)
```




# class LineCollectionsBuilder


