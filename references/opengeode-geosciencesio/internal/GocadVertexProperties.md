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

# class GocadVertexProperties


 Vertex attributes written as GOCAD properties: transferable and genericable attributes, with all their items and full precision for double based attributes.



## Functions

### GocadVertexProperties

```cpp
public void GocadVertexProperties(const GocadVertexProperties & )
```


### GocadVertexProperties

```cpp
public void GocadVertexProperties(GocadVertexProperties && )
```


### operator=

```cpp
public GocadVertexProperties & operator=(const GocadVertexProperties & )
```


### operator=

```cpp
public GocadVertexProperties & operator=(GocadVertexProperties && )
```


### empty

```cpp
public bool empty()
```


### header

```cpp
public const PropHeaderData & header()
```


### class_headers

```cpp
public const std::vector<PropClassHeaderData> & class_headers()
```


### GocadVertexProperties

```cpp
public void GocadVertexProperties(const AttributeManager & attribute_manager)
```


### ~GocadVertexProperties

```cpp
public void ~GocadVertexProperties()
```


### write_values

```cpp
public void write_values(std::ostream & file, index_t vertex)
```


 Writes the property values of the given vertex, each one preceded by a space.



