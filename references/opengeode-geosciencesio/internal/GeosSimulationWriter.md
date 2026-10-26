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

# class GeosSimulationWriter


 Translates a validated PhysicalProblem into the GEOS deck sections that do not depend on the mesh export. Every solid region must have a material and an initial condition in the given assignments.



## Functions

### GeosSimulationWriter

```cpp
public void GeosSimulationWriter(const GeosSimulationWriter & )
```


### GeosSimulationWriter

```cpp
public void GeosSimulationWriter(GeosSimulationWriter && )
```


### operator=

```cpp
public GeosSimulationWriter & operator=(const GeosSimulationWriter & )
```


### operator=

```cpp
public GeosSimulationWriter & operator=(GeosSimulationWriter && )
```


### GeosSimulationWriter

```cpp
public void GeosSimulationWriter(const PhysicalProblem & problem, const GeosDeckContext & context, const GeosRegionAssignment & materials, const GeosRegionAssignment & initial_conditions)
```


### ~GeosSimulationWriter

```cpp
public void ~GeosSimulationWriter()
```


### imported_fields

```cpp
public absl::Span<const GeosImportedField> imported_fields()
```


 Model arrays to write in the VTU file and import in GEOS

### write_physics

```cpp
public void write_physics(pugi::xml_node & problem_node)
```


 Solvers, NumericalMethods, ElementRegions and Constitutive

### write_initial_conditions

```cpp
public void write_initial_conditions(pugi::xml_node & field_specifications)
```


### write_source_terms

```cpp
public void write_source_terms(pugi::xml_node & field_specifications)
```


 SourceFlux on the well perforation sets

### has_functions

```cpp
public bool has_functions()
```


### write_functions

```cpp
public void write_functions(pugi::xml_node & functions)
```


### write_events_and_outputs

```cpp
public void write_events_and_outputs(pugi::xml_node & problem_node)
```


### apply_solver_options

```cpp
public void apply_solver_options(pugi::xml_node & problem_node)
```


 Applies the "geos" solver options to the generated nodes



