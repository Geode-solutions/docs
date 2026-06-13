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
protected void VTKOutputImpl<Mesh>(std::string_view filename, const Mesh & mesh, const char * type)
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
protected std::string_view filename()
```


### write_attributes

```cpp
protected void write_attributes(pugi::xml_node & attribute_node, const AttributeManager & manager)
```


### write_attributes

```cpp
protected void write_attributes(pugi::xml_node & attribute_node, const AttributeManager & manager, absl::Span<const index_t> elements)
```


### write_attribute_header

```cpp
protected pugi::xml_node write_attribute_header(pugi::xml_node & attribute_node, std::string_view name, local_index_t nb_components)
```




