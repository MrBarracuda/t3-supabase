set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_user_on_signup()
 RETURNS record
 LANGUAGE plpgsql
AS $function$begin

insert into public.users(id, email, display_name, image_url)
  values(
    new.id,
    new.raw_user_meta_data ->> 'email',
    COALESCE(new.raw_user_meta_data ->> 'user_name',
    new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url'
  );

  return new;

end;$function$
;


