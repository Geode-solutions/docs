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

# class VTKOutputImpl


## Functions

### write_file

```cpp
public void write_file()
```


### VTKOutputImpl

```cpp
protected void VTKOutputImpl<Mesh>(basic_string_view filename, const Mesh & mesh, const char * type)
```


### ~VTKOutputImpl

```cpp
protected void ~VTKOutputImpl<Mesh>()
```


### mesh

```cpp
protected const Mesh & mesh()
```


### filename

```cpp
protected basic_string_view filename()
```


### write_attributes

```cpp
protected void write_attributes(pugi::xml_node & attribute_node, const AttributeManager & manager)
```


### write_attributes

```cpp
protected void write_attributes(pugi::xml_node & attribute_node, const AttributeManager & manager, Span elements)
```


### write_attribute_header

```cpp
protected xml_node write_attribute_header(pugi::xml_node & attribute_node, basic_string_view name, local_index_t nb_components)
```




