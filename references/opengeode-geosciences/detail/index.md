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

# namespace detail



## Functions

### copy_faults

```cpp
void copy_faults(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_horizons

```cpp
void copy_horizons(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_fault_blocks

```cpp
void copy_fault_blocks(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_stratigraphic_units

```cpp
void copy_stratigraphic_units(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```


### copy_collection_item_relationships

```cpp
void copy_collection_item_relationships(const ModelFrom & from, const CollectionRangeFrom & collection_range_from, const Mapping & collection_mapping, const Mapping & item_mapping, BuilderTo & builder_to)
```


### rescale_implicit_value

```cpp
void rescale_implicit_value(ImplicitCrossSection & section, double scaling_factor)
```


### rescale_implicit_value_to_bbox_scale

```cpp
void rescale_implicit_value_to_bbox_scale(StratigraphicSection & section)
```


### rescale_implicit_value

```cpp
void rescale_implicit_value(ImplicitStructuralModel & model, double scaling_factor)
```


### rescale_implicit_value_to_bbox_scale

```cpp
void rescale_implicit_value_to_bbox_scale(StratigraphicModel & model)
```


### save_stratigraphic_surfaces

```cpp
void save_stratigraphic_surfaces(const StratigraphicSection & section, basic_string_view prefix)
```


### save_stratigraphic_blocks

```cpp
void save_stratigraphic_blocks(const StratigraphicModel & model, basic_string_view prefix)
```


### implicit_section_from_cross_section_scalar_field

```cpp
ImplicitCrossSection implicit_section_from_cross_section_scalar_field(CrossSection && section, basic_string_view scalar_attribute_name)
```


### implicit_model_from_structural_model_scalar_field

```cpp
ImplicitStructuralModel implicit_model_from_structural_model_scalar_field(StructuralModel && model, basic_string_view scalar_attribute_name)
```


### stratigraphic_model_from_implicit_model_and_coords

```cpp
StratigraphicModel stratigraphic_model_from_implicit_model_and_coords(ImplicitStructuralModel && implicit_model, local_index_t implicit_axis)
```


### horizons_stack_from_name_list

```cpp
HorizonsStack<dimension> horizons_stack_from_name_list(Span horizons_names, Span units_names)
```


 Creates a HorizonsStack from a list of names of Horizons and StratigraphicUnits. The bottom horizon and stratigraphic unit will be the first in the lists, respectively.

### repair_horizon_stack_if_possible

```cpp
void repair_horizon_stack_if_possible(const HorizonsStack<dimension> & horizon_stack, HorizonsStackBuilder<dimension> & builder)
```


### horizon_id_from_name

```cpp
optional horizon_id_from_name(const HorizonsStack<dimension> & horizon_stack, basic_string_view horizon_name)
```


### invalid_stratigraphic_tetrahedra

```cpp
vector invalid_stratigraphic_tetrahedra(const StratigraphicModel & model)
```


### add_geology_clone_mapping

```cpp
void add_geology_clone_mapping(ModelCopyMapping & mapping, const Model & model)
```


### clone_horizon_mapping

```cpp
BijectiveMapping clone_horizon_mapping(const Model & model)
```


### clone_stratigraphic_unit_mapping

```cpp
BijectiveMapping clone_stratigraphic_unit_mapping(const Model & model)
```




