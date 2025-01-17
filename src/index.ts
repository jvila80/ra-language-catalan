import { TranslationMessages } from "ra-core";

const catalanMessages: TranslationMessages = {
  ra: {
    action: {
      add_filter: "Afegir filtre",
      add: "Afegir",
      back: "Tornar",
      bulk_actions:
        "1 element seleccionat |||| %{smart_count} elements seleccionats",
      cancel: "Cancel·lar",
      clear_input_value: "Netejar valor",
      clone: "Clonar",
      confirm: "Confirmeu",
      create: "Crear",
      create_item: "Crear %{item}",
      delete: "Eliminar",
      edit: "Editar",
      export: "Exportar",
      list: "Llistar",
      refresh: "Refrescar",
      remove_filter: "Esborrar aquest filtre",
      remove: "Esborrar",
      save: "Desar",
      search: "Cercar",
      select_all: 'Seleccionar tot',
      select_row: 'Selecciona aquesta fila',
      show: "Mostrar",
      sort: "Ordenar",
      undo: "Desfer",
      unselect: "Desseleccionar",
      expand: "Ampliar",
      close: "Tanca",
      open_menu: "Obre el menú",
      close_menu: "Tanca el menú",
      update: "Actualització",
      move_up: 'Moure amunt',
      move_down: 'Moure avall',
      open: 'Obrir',
      toggle_theme: 'Canviar tema',      
    },
    boolean: {
      true: "Si",
      false: "No",
      null: " ",
    },
    page: {
      create: "Crear %{name}",
      dashboard: "Dashboard",
      edit: "%{name} #%{id}",
      error: "S'ha produït un error",
      list: "Llista de %{name}",
      loading: "Carregant",
      not_found: "No s'ha trobat",
      show: "%{name} #%{id}",
      empty: "Encara no hi ha %{name}.",
      invite: "¿Vol afegir una?",
    },
    input: {
      file: {
        upload_several:
          "Arrossega els fitxers a pujar o clica per seleccionar-ne un.",
        upload_single:
          "Arrossega el fitxer a pujar o clica per seleccionar-lo.",
      },
      image: {
        upload_several:
          "Arrossega les imatges a pujar o clica per seleccionar-ne una.",
        upload_single:
          "Arrossega la imatge a pujar o clica per seleccionar-la.",
      },
      references: {
        all_missing: "No s'han pogut trobar referències.",
        many_missing:
          "Al menys una de les referències associades no sembla estar disponible.",
        single_missing: "La referència associades ja no està disponible.",
      },
      password: {
        toggle_visible: "Amagueu la contrasenya",
        toggle_hidden: "Mostrar contraseña",
      },
    },
    message: {
      about: "Sobre",
      are_you_sure: "Està segur?",
      bulk_delete_content:
        "Està segur d'eliminar l'element %{name}? |||| Està segur d'eliminar aquests %{smart_count} elements?",
      bulk_delete_title:
        "Eliminar %{name} |||| Eliminar %{smart_count} %{name} elements",
      bulk_update_content:
        "Esteu segur que voleu actualitzar aquest %{name}? |||| Esteu segur que voleu actualitzar aquests %{smart_count} elements?",
      bulk_update_title:
        "Actualitzar %{name} |||| Actualitza %{smart_count} %{name}",
      delete_content: "Està segur d'eliminar aquest element?",
      delete_title: "Eliminar %{name} #%{id}",
      details: "Detalls",
      error:
        "S'ha prodït un error al client i la seva petició no s'ha pogut completar.",
      invalid_form: "El formulari no és vàlid. Si us plau, revisi els errors",
      loading: "La pàgina s'està carregant, esperi un moment si us plau",
      no: "No",
      not_found:
        "O bé ha escrit una URL incorrecta, o bé ha navegat a un enllaç erroni.",
      yes: "Sí",
      unsaved_changes:
        "Alguns dels canvis no s'han desat. Esteu segur que voleu ignorar-les?",
    },
    navigation: {
      no_results: "Sense resultats",
      no_more_results:
        "La pàgina número %{page} està fora de rang. Provi amb la pàgina anterior.",
      page_out_of_boundaries: "Pàgina número %{page} fora de rang",
      page_out_from_end: "No es pot anar més enllà de la última pàgina",
      page_out_from_begin: "No es pot anar més enllà de la pàgina 1",
      page_range_info: "%{offsetBegin} - %{offsetEnd} de %{total}",
      page_rows_per_page: "Files per pàgina:",
      partial_page_range_info:
        '%{offsetBegin}-%{offsetEnd} de més de %{offsetEnd}',
      current_page: 'Pàgina %{page}',
      page: 'Anar a la pàgina %{page}',
      first: 'Anar a la primera pàgina',
      last: "Anar a l'última pàgina",
      next: "Següent",
      previous: "Anterior",      
      skip_nav: 'Saltar al contingut',
    },
    sort: {
      sort_by: "Ordenar per %{field} %{order}",
      ASC: "ascendent",
      DESC: "descendent",
    },
    auth: {
      auth_check_error: "Inicieu la sessió per continuar",
      user_menu: "Perfil",
      username: "Usuari",
      password: "Contrasenya",
      sign_in: "Iniciar sessió",
      sign_in_error: "Ha fallat l'autenticació, si us plau torni a provar-ho",
      logout: "Tancar sessió",
    },
    notification: {
      updated: "Element actualitzat |||| %{smart_count} elements actualitzats",
      created: "Element creat",
      deleted: "Element eliminat |||| %{smart_count} elements eliminats",
      bad_item: "Element incorrecte",
      item_doesnt_exist: "L'element no existeix",
      http_error: "Error de comunicació amb el servidor",
      data_provider_error:
        "Error del dataProvider. Comprova la consola per més detalls.",
      i18n_error:
        "No es poden carregar les traduccions per a l'idioma especificat",
      canceled: "Acció cancel·lada",
      logged_out: "La seva sessió ha finalitzat, torneu a connectar-se.",
      not_authorized: "No teniu autorització per accedir a aquest recurs.",
    },
    validation: {
      required: "Obligatori",
      minLength: "Longitud mínima de %{min} caràcters",
      maxLength: "Longitud màxima de %{max} caràcters",
      minValue: "El valor mínim és %{min}",
      maxValue: "El valor màxim és %{max}",
      number: "Ha de ser un valor numèric",
      email: "Ha de ser una adreça electrònica vàlida",
      oneOf: "Ha de ser un d'aquests valors: %{options}",
      regex: "Ha de complir el format (expressió regular): %{pattern}",
    },
    saved_queries: {
      label: 'Consultes desades',
      query_name: 'Nom consulta',
      new_label: 'Desar la consulta actual...',
      new_dialog_title: 'Desar la consulta actual',
      remove_label: 'Eliminar consulta desada',
      remove_label_with_name: 'Eliminar consulta "%{name}"',
      remove_dialog_title: 'Eliminar consulta?',
      remove_message:"S'eliminarà la consulta de la llista de consultes desades.",
      help: 'Filtrar la llista i desar la consulta',
    },
  },
};

export default catalanMessages;
